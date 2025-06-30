import asyncio
import sys
import json
from ecoindex.scraper import EcoindexScraper

async def main():
    url = sys.argv[1]
    result = await EcoindexScraper(url=url).get_page_analysis()

    json_format = {
      "url": result.url,
      "grade": result.grade.replace("<Grade.", "").split(":")[0],
      "score": result.score,
      "ges": result.ges,
      "water": result.water
    }

    with open('ecoindex-result.json', 'w', encoding='utf-8') as file:
        json.dump(json_format, file, separators=(',', ':'), ensure_ascii=False)

    print("Ecoindex audit done, check ecoindex-result.json for more information.")

if __name__ == "__main__":
    asyncio.run(main())
