from rembg import remove
from PIL import Image

input_path = "C:/Users/akhil/.gemini/antigravity/brain/d0228f7c-68d7-4fd7-b1aa-ba22d57bd98a/media__1778949210932.jpg"
output_path = "C:/Users/akhil/.gemini/antigravity/scratch/primefilings/public/logo-transparent.png"

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print("Background removed successfully!")
