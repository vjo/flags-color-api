# Work In Progress - Fags Color API

Flags Color API is a JSON API that given an [ISO 3166](http://www.iso.org/iso/home/standards/country_codes.htm) `country_code`, let you get:
* `country`: Country name (English)
* `country_code`: Country code [ISO 3166](http://www.iso.org/iso/home/standards/country_codes.htm)
* `rgb`: Red Green Blue (RGB) color values
* `hex`: Hexadecimal color values
* `pantone`: [Pantone](https://www.pantone.com) color names

Example:
```shell
curl domain.tld/country/fra
```
```json
{
  "county": "France",
  "country_code": "fra",
  "rgb": [{ "r": 0, "g": 85, "b": 164 },
          { "r": 255, "g":255, "b":255 },
          { "r": 239, "g": 65, "b": 53}],
  "hex": ["#0055A4", "#FFFFFF", "#EF4135"],
  "pantone": ["Reflex Blue C", "White", "Red 032 C"]
}
```

## Contribute: Add or edit a flag
If you'd like to add a new flag or fix an error, please feel free to either:
* Submit an issue
* Submit a pull request
* Contact me on Twitter: @vjo
