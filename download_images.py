#!/usr/bin/env python3
import requests
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.incustom.com/',
    'Origin': 'https://www.incustom.com',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
}

session = requests.Session()
session.headers.update(headers)

# List of potential carousel image URLs
image_urls = [
    ('incustom_top.png', 'https://www.incustom.com/images/incustom_top.png'),
    ('business.webp', 'https://static.wixstatic.com/media/nsplsh_59d6a7e85d64436e93008c6f8a31c3a1~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/business.webp'),
    ('collect1.webp', 'https://static.wixstatic.com/media/collect0120-1-1.webp'),
    ('collect2.webp', 'https://static.wixstatic.com/media/collect0120-1-2.webp'),
    ('collect3.webp', 'https://static.wixstatic.com/media/collect0120-1-3.webp'),
    ('collect4.webp', 'https://static.wixstatic.com/media/collect0120-1-4.webp'),
]

output_dir = 'carousel_images'
os.makedirs(output_dir, exist_ok=True)

for filename, url in image_urls:
    print(f'Downloading {filename}...')
    try:
        response = session.get(url, timeout=10)
        if response.status_code == 200:
            filepath = os.path.join(output_dir, filename)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f'  Saved {len(response.content)} bytes')
        else:
            print(f'  Failed with status {response.status_code}')
            print(f'  Response: {response.text[:100]}')
    except Exception as e:
        print(f'  Error: {e}')

print('Done.')