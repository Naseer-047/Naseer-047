import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

def image_to_ascii(image_path, width=45):
    # characters from dark to light
    chars = ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "]
    
    try:
        img = Image.open(image_path).convert('L')
    except Exception as e:
        print(f"Error: {e}")
        return

    # Resize
    w, h = img.size
    aspect_ratio = h / float(w)
    # Monospace fonts in SVG usually have a height/width ratio of ~ 1.66
    new_height = int(width * aspect_ratio * 0.6)
    img = img.resize((width, new_height))
    
    pixels = img.getdata()
    ascii_str = ""
    for pixel in pixels:
        # 256 / len(chars) = 25.6
        index = int(pixel / 25.6)
        if index >= len(chars): index = len(chars)-1
        ascii_str += chars[index]
    
    # Format to string with newlines
    ascii_img = ""
    for i in range(0, len(ascii_str), width):
        ascii_img += ascii_str[i:i+width] + "\n"
        
    print(ascii_img)

if __name__ == "__main__":
    image_to_ascii("assets/me.png")
