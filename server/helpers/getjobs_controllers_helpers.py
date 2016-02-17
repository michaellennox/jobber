import urllib.request
import shlex
import xml.etree.ElementTree as ET


def get_xml(key, query, location):
    xml_file = urllib.request.urlopen('http://api.indeed.com/ads/apisearch?publisher='
      + key + '&q='
      + format_query(query) + '&l=' + location
      +'&st=employer&latlong=1&co=gb&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
    return ET.parse(xml_file).getroot().findall('results/result')

def display_text(attributes, result):
    return {attribute: result.find(attribute).text for attribute in attributes}

def format_query(query):
    return '-'.join(shlex.split(query))
