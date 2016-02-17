import urllib.request
import shlex
import xml.etree.ElementTree as ET


def get_xml(key, query, location):
    formatted_query = '-'.join(shlex.split(query))
    xml_file = urllib.request.urlopen('http://api.indeed.com/ads/apisearch?publisher='
      + key + '&q='
      + formatted_query + '&l=' + location
      +'&st=employer&latlong=1&co=gb&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
    return ET.parse(xml_file).getroot().findall('results/result')

def display_text(attributes, result):
    return {attribute: result.find(attribute).text for attribute in attributes}
