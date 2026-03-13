#!/usr/bin/env python3
import re
import sys
from html.parser import HTMLParser

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
        self.bg_images = []
        
    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            for attr, value in attrs:
                if attr == 'src':
                    self.images.append(value)
        # Also look for inline style background-image
        for attr, value in attrs:
            if attr == 'style' and value:
                bg_match = re.search(r'background-image:\s*url\(["\']?([^"\'()]+)["\']?\)', value)
                if bg_match:
                    self.bg_images.append(bg_match.group(1))
    
    def handle_startendtag(self, tag, attrs):
        if tag == 'img':
            for attr, value in attrs:
                if attr == 'src':
                    self.images.append(value)

def extract_urls(html_content):
    # Also extract URLs from CSS background-image in style tags
    bg_pattern = r'background-image:\s*url\(["\']?([^"\'()]+)["\']?\)'
    style_bg = re.findall(bg_pattern, html_content, re.IGNORECASE)
    
    # Extract img src using regex as fallback
    img_pattern = r'<img[^>]+src=["\']([^"\']+)["\']'
    img_src = re.findall(img_pattern, html_content, re.IGNORECASE)
    
    return list(set(img_src + style_bg))

def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_images.py <html_file>")
        sys.exit(1)
    
    html_file = sys.argv[1]
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Parse with HTMLParser
    parser = ImageParser()
    parser.feed(content)
    
    print("Found images (img src):")
    for img in parser.images:
        print(img)
    
    print("\nFound background images (inline style):")
    for bg in parser.bg_images:
        print(bg)
    
    print("\nAll unique image URLs (regex method):")
    all_urls = extract_urls(content)
    for url in all_urls:
        print(url)
        
    # Filter for likely carousel images
    print("\nLikely carousel/banner images:")
    carousel_keywords = ['banner', 'hero', 'slide', 'carousel', 'slider', 'swiper', 'main', 'home', 'header']
    for url in all_urls:
        url_lower = url.lower()
        for keyword in carousel_keywords:
            if keyword in url_lower:
                print(f"{keyword}: {url}")
                break

if __name__ == '__main__':
    main()