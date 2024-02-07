import csv
import json

iso_alpha3_to_alpha2 = {
  "AFG": "AF",
  "DZA": "DZ",
  "AGO": "AO",
  "ATG": "AG",
  "ARG": "AR",
  "ARM": "AM",
  "AZE": "AZ",
  "BHS": "BS",
  "BGD": "BD",
  "BRB": "BB",
  "BLR": "BY",
  "BLZ": "BZ",
  "BEN": "BJ",
  "BTN": "BT",
  "BOL": "BO",
  "BIH": "BA",
  "BWA": "BW",
  "BRA": "BR",
  "BFA": "BF",
  "BDI": "BI",
  "KHM": "KH",
  "CMR": "CM",
  "CPV": "CV",
  "CAF": "CF",
  "TCD": "TD",
  "CHL": "CL",
  "CHN": "CN",
  "COL": "CO",
  "COM": "KM",
  "COG": "CG",
  "COK": "CK",
  "CRI": "CR",
  "CIV": "CI",
  "CUB": "CU",
  "COD": "CD",
  "DJI": "DJ",
  "DMA": "DM",
  "DOM": "DO",
  "TLS": "TL",
  "ECU": "EC",
  "EGY": "EG",
  "SLV": "SV",
  "GNQ": "GQ",
  "ERI": "ER",
  "SWZ": "SZ",
  "ETH": "ET",
  "FJI": "FJ",
  "PYF": "PF",
  "GAB": "GA",
  "GMB": "GM",
  "GEO": "GE",
  "GHA": "GH",
  "GRD": "GD",
  "GTM": "GT",
  "GIN": "GN",
  "GNB": "GW",
  "GUY": "GY",
  "HTI": "HT",
  "HND": "HN",
  "HKG": "HK",
  "IND": "IN",
  "IDN": "ID",
  "IRN": "IR",
  "IRQ": "IQ",
  "JAM": "JM",
  "JOR": "JO",
  "KAZ": "KZ",
  "KEN": "KE",
  "KIR": "KI",
  "OWID_KOS": "XK",
  "KGZ": "KG",
  "LAO": "LA",
  "LBN": "LB",
  "LSO": "LS",
  "LBR": "LR",
  "LBY": "LY",
  "MAC": "MO",
  "MDG": "MG",
  "MWI": "MW",
  "MYS": "MY",
  "MDV": "MV",
  "MLI": "ML",
  "MHL": "MH",
  "MRT": "MR",
  "MUS": "MU",
  "MEX": "MX",
  "FSM": "FM",
  "MDA": "MD",
  "MNG": "MN",
  "MNE": "ME",
  "MSR": "MS",
  "MAR": "MA",
  "MOZ": "MZ",
  "MMR": "MM",
  "NAM": "NA",
  "NRU": "NR",
  "NPL": "NP",
  "NCL": "NC",
  "NIC": "NI",
  "NER": "NE",
  "NGA": "NG",
  "NIU": "NU",
  "PRK": "KP",
  "MKD": "MK",
  "PAK": "PK",
  "PLW": "PW",
  "PSE": "PS",
  "PAN": "PA",
  "PNG": "PG",
  "PRY": "PY",
  "PER": "PE",
  "PHL": "PH",
  "RWA": "RW",
  "SHN": "SH",
  "LCA": "LC",
  "VCT": "VC",
  "WSM": "WS",
  "STP": "ST",
  "SEN": "SN",
  "SRB": "RS",
  "SYC": "SC",
  "SLE": "SL",
  "SLB": "SB",
  "SOM": "SO",
  "ZAF": "ZA",
  "SSD": "SS",
  "LKA": "LK",
  "SDN": "SD",
  "SUR": "SR",
  "SYR": "SY",
  "TJK": "TJ",
  "TZA": "TZ",
  "THA": "TH",
  "TGO": "TG",
  "TKL": "TK",
  "TON": "TO",
  "TTO": "TT",
  "TUN": "TN",
  "TUR": "TR",
  "TKM": "TM",
  "TUV": "TV",
  "UGA": "UG",
  "UKR": "UA",
  "URY": "UY",
  "UZB": "UZ",
  "VUT": "VU",
  "VEN": "VE",
  "VNM": "VN",
  "WLF": "WF",
  "OWID_WRL": "XW", #World
  "YEM": "YE",
  "ZMB": "ZM",
  "ZWE": "ZW",
  "" : "UN",
}

def csv_to_dict(input_csv):
    data_dict = {}

    with open(input_csv, 'r') as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            country_code_alpha3 = row['Code']
            country_code_alpha2 = iso_alpha3_to_alpha2[country_code_alpha3]
            year = int(row['Year'])
            flow = int(row['Financial Flows'])
            country_name = row['Entity']

            if country_code_alpha2 == "UN":
                country_code_alpha2 = country_code_alpha2 + "_" + country_name

            if country_code_alpha2 not in data_dict:
                data_dict[country_code_alpha2] = {
                    'name': country_name,
                    'year': [],
                    'flows': []
                }

            data_dict[country_code_alpha2]['year'].append(year)
            data_dict[country_code_alpha2]['flows'].append(flow)

    return data_dict

def save_as_json(output_json, data_dict):
    with open(output_json, 'w') as jsonfile:
        json.dump(data_dict, jsonfile, indent=2)

if __name__ == "__main__":
    input_csv_file = "international-finance-clean-energy.csv"  # Replace with the actual path to your CSV file
    output_json_file = "complete.json"  # Replace with the desired path for the output JSON file

    data_dict = csv_to_dict(input_csv_file)
    save_as_json(output_json_file, data_dict)
