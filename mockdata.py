"""
mockdata.py is created to be used in the final project of INF5750 Open Source Development.
It fills up both the datastore and the userdatastore with mockdata so there
are some more data to work with when we develop our final project.
"""

import sys
import requests
import json
import time
from requests.auth import HTTPBasicAuth

headers = {"Content-type": "application/json"}

def doRequest(reqURL, payload):
    r = requests.post(reqURL, data=json.dumps(payload), auth=HTTPBasicAuth('admin', 'district'), headers=headers)
    print r.status_code

def generatePayload():
    payload = {"first_name": "alex", "last_name": "jones"}
    return payload

def generateNamespace():
    namespaces = ["arne/key", "kjetil/key", "per/key", "turid/key", "alfred/key", "joakim/key", "berit/key",
            "arne/key2", "kjetil/key2", "per/key2", "turid/key2", "alfred/key2", "joakim/key2", "berit/key2",
            "arne/key3", "kjetil/key3", "per/key3", "turid/key3", "alfred/key3", "joakim/key3", "berit/key3"]
    return namespaces

def mockDataStore():
    dataStoreURL = "https://play.dhis2.org/dev/api/25/dataStore/"
    namespaces = generateNamespace()

    for name in namespaces:
        dataStoreURL += name
        payload = generatePayload()
        doRequest(dataStoreURL, payload)
        dataStoreURL = "https://play.dhis2.org/dev/api/25/dataStore/"
        

def mockUserDataStore():
    userDataStoreURL = "https://play.dhis2.org/dev/api/25/userDataStore/"
    namespaces = generateNamespace()

    for name in namespaces:
        userDataStoreURL += name
        payload = generatePayload()
        doRequest(userDataStoreURL, payload)
        userDataStoreURL = "https://play.dhis2.org/dev/api/25/userDataStore/"


if len(sys.argv) != 2:
    print "[USAGE]: No argument, specify if you want userDataStore, dataStore or both. --ds --uds --both"

if sys.argv[1] == "--ds":
    mockDataStore()
elif sys.argv[1] == "--uds":
    mockUserDataStore()
elif sys.argv[1] == "--both":
    mockDataStore()
    mockUserDataStore()
else:
    print "Not a valid argument"