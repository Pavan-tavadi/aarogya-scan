from .risk_rules import RISK_RULES


def assess_risk(patient_data):
    score = 0
    risk_factors = []
    recommendations = []

    bmi = patient_data.get("bmi")
    if bmi is not None and bmi >= 30:
        score += RISK_RULES["high_bmi"]
        risk_factors.append("High BMI")
        recommendations.append(
            "Maintain healthy weight through diet and exercise."
        )

    systolic = patient_data.get("systolic_bp")
    diastolic = patient_data.get("diastolic_bp")

    if systolic and diastolic:
        if systolic >= 140 or diastolic >= 90:
            score += RISK_RULES["high_blood_pressure"]
            risk_factors.append("High Blood Pressure")
            recommendations.append(
                "Monitor blood pressure regularly."
            )

    glucose = patient_data.get("blood_glucose")
    if glucose and glucose >= 126:
        score += RISK_RULES["high_blood_glucose"]
        risk_factors.append("High Blood Glucose")
        recommendations.append(
            "Check blood sugar levels regularly."
        )

    heart_rate = patient_data.get("heart_rate")
    if heart_rate and heart_rate > 100:
        score += RISK_RULES["high_heart_rate"]
        risk_factors.append("High Heart Rate")
        recommendations.append(
            "Monitor resting heart rate."
        )

    if patient_data.get("smoking"):
        score += RISK_RULES["smoking"]
        risk_factors.append("Smoking")
        recommendations.append(
            "Consider quitting smoking."
        )

    if patient_data.get("alcohol"):
        score += RISK_RULES["alcohol"]
        risk_factors.append("Alcohol Consumption")
        recommendations.append(
            "Limit alcohol intake."
        )

    if patient_data.get("physical_activity") == "low":
        score += RISK_RULES["low_physical_activity"]
        risk_factors.append("Low Physical Activity")
        recommendations.append(
            "Increase regular physical activity."
        )

    if score >= 60:
        risk_level = "High"
    elif score >= 30:
        risk_level = "Moderate"
    else:
        risk_level = "Low"

    return {
        "risk_score": score,
        "risk_level": risk_level,
        "risk_factors": risk_factors,
        "recommendations": recommendations,
    }