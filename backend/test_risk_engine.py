from risk_engine import assess_risk

patient = {
    "age": 65,
    "bmi": 32,
    "systolic_bp": 150,
    "diastolic_bp": 95,
    "blood_glucose": 140,
    "heart_rate": 105,
    "smoking": True,
    "alcohol": False,
    "physical_activity": "low",
    "symptoms": [
        "fatigue",
        "headache",
        "chest pain"
    ]
}

result = assess_risk(patient)

print(result)