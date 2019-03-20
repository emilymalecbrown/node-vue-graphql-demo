import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({
  countries: [
    {
      "name": "Andorra",
      "emoji": "🇦🇩",
      "languages": [
        {
          "native": "Català"
        }
      ]
    },
    {
      "name": "United Arab Emirates",
      "emoji": "🇦🇪",
      "languages": [
        {
          "native": "العربية"
        }
      ]
    },
    {
      "name": "Afghanistan",
      "emoji": "🇦🇫",
      "languages": [
        {
          "native": "پښتو"
        },
        {
          "native": "Туркмен / تركمن"
        },
        {
          "native": "Ўзбек"
        }
      ]
    },
    {
      "name": "Antigua and Barbuda",
      "emoji": "🇦🇬",
      "languages": [
        {
          "native": "English"
        }
      ]
    },
    {
      "name": "Anguilla",
      "emoji": "🇦🇮",
      "languages": [
        {
          "native": "English"
        }
      ]
    },
    {
      "name": "Albania",
      "emoji": "🇦🇱",
      "languages": [
        {
          "native": "Shqip"
        }
      ]
    },
    {
      "name": "Armenia",
      "emoji": "🇦🇲",
      "languages": [
        {
          "native": "Հայերեն"
        },
        {
          "native": "Русский"
        }
      ]
    },
    {
      "name": "Angola",
      "emoji": "🇦🇴",
      "languages": [
        {
          "native": "Português"
        }
      ]
    },
    {
      "name": "Antarctica",
      "emoji": "🇦🇶",
      "languages": []
    },
    {
      "name": "Argentina",
      "emoji": "🇦🇷",
      "languages": [
        {
          "native": "Español"
        },
        {
          "native": "Avañe'ẽ"
        }
      ]
    },
    {
      "name": "American Samoa",
      "emoji": "🇦🇸",
      "languages": [
        {
          "native": "English"
        },
        {
          "native": "Gagana Samoa"
        }
      ]
    }
  ]})
  .write();

export default db;
