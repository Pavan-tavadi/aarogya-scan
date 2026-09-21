import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodPressure: "",
    heartRate: "",
    glucose: "",
    bmi: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Your health information has been collected. Backend integration will be added soon!"
    );

    console.log(formData);
  };

  const goHome = () => {
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={goHome}>
          <div className="logo-symbol">✚</div>
          <div>
            <span className="logo-main">Aarogya</span>
            <span className="logo-sub">Scan</span>
          </div>
        </div>

        <div className="nav-links">
          <button onClick={goHome}>Home</button>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button
          className="nav-cta"
          onClick={() => setShowForm(true)}
        >
          Get Started ↗
        </button>
      </nav>

      {!showForm ? (
        <>
          {/* HERO SECTION */}
          <section className="hero" id="home">
            <div className="hero-content">

              <div className="eyebrow">
                <span className="status-dot"></span>
                SMART HEALTH SCREENING
              </div>

              <h1>
                Your Health.
                <br />
                <span>Your Future.</span>
                <br />
                Our Priority.
              </h1>

              <p className="hero-description">
                Take control of your health with Aarogya Scan.
                Explore your health information through simple,
                intelligent screening designed for everyone.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => setShowForm(true)}
                >
                  Start Screening <span>→</span>
                </button>

                <a href="#features" className="secondary-btn">
                  Explore Features ↓
                </a>
              </div>

              <div className="trust-row">
                <div className="trust-icon">✓</div>
                <div>
                  <strong>Simple & Accessible</strong>
                  <p>Designed for everyone</p>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-icon">🛡</div>
                <div>
                  <strong>Privacy Focused</strong>
                  <p>Your information matters</p>
                </div>
              </div>

            </div>

            {/* HEALTH VISUAL */}
            <div className="hero-visual">

              <div className="floating-badge badge-top">
                <span>✦</span> AI-ASSISTED
              </div>

              <div className="medical-orbit">
                <div className="orbit-ring ring-one"></div>
                <div className="orbit-ring ring-two"></div>

                <div className="medical-card">
                  <div className="card-top">
                    <span className="mini-label">HEALTH OVERVIEW</span>
                    <span className="card-menu">•••</span>
                  </div>

                  <div className="heart-circle">
                    <span>♥</span>
                  </div>

                  <h3>Your Health Matters</h3>
                  <p>Small steps. Better awareness.</p>

                  <div className="pulse-graph">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="card-footer">
                    <div>
                      <small>SCREENING STATUS</small>
                      <strong>Ready to begin</strong>
                    </div>
                    <div className="ready-icon">✓</div>
                  </div>
                </div>
              </div>

              <div className="floating-badge badge-bottom">
                <span>♡</span> WELLNESS FIRST
              </div>

            </div>
          </section>

          {/* STATS STRIP */}
          <section className="stats-strip">
            <div className="stat-item">
              <span className="stat-number">01</span>
              <div>
                <strong>Simple Process</strong>
                <p>Easy health data entry</p>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-number">02</span>
              <div>
                <strong>Smart Analysis</strong>
                <p>Backend-powered insights</p>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-number">03</span>
              <div>
                <strong>Clear Results</strong>
                <p>Understand your information</p>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="features-section" id="features">
            <div className="section-heading">
              <div className="eyebrow">WHY AAROGYA SCAN?</div>
              <h2>Healthcare made<br /><span>simple.</span></h2>
              <p>
                Everything you need to begin understanding
                your health in one place.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🩺</div>
                <h3>Health Screening</h3>
                <p>
                  Enter basic health information through
                  an easy-to-use screening form.
                </p>
                <span className="feature-arrow">↗</span>
              </div>

              <div className="feature-card featured-card">
                <div className="feature-icon">✦</div>
                <h3>Intelligent Insights</h3>
                <p>
                  Designed to work with AI-assisted analysis
                  for personalized health information.
                </p>
                <span className="feature-arrow">↗</span>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Clear Reports</h3>
                <p>
                  View easy-to-understand results and
                  helpful next-step information.
                </p>
                <span className="feature-arrow">↗</span>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="about-section" id="about">
            <div className="about-box">
              <div className="about-symbol">✚</div>
              <div>
                <div className="eyebrow">ABOUT AAROGYA SCAN</div>
                <h2>Better awareness.<br />Better decisions.</h2>
                <p>
                  Aarogya Scan is an AI-assisted health screening
                  project designed to help people understand
                  potential health risks through accessible technology.
                </p>
                <p className="about-note">
                  Screening results are informational and do not
                  replace professional medical advice.
                </p>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <div className="logo">
              <div className="logo-symbol">✚</div>
              <div>
                <span className="logo-main">Aarogya</span>
                <span className="logo-sub">Scan</span>
              </div>
            </div>
            <p>Technology for better health awareness.</p>
            <span>© 2026 Aarogya Scan</span>
          </footer>
        </>
      ) : (

        /* SCREENING FORM */
        <section className="form-section">
          <div className="form-container">

            <button className="back-btn" onClick={goHome}>
              ← Back to Home
            </button>

            <div className="form-heading">
              <div className="form-icon">🩺</div>
              <div className="eyebrow">YOUR HEALTH JOURNEY</div>
              <h1>Health Screening</h1>
              <p>
                Share your health information to begin
                your screening.
              </p>
            </div>

            <div className="form-notice">
              <span>ⓘ</span>
              Your information will be used for screening
              once the backend is connected.
            </div>

            <form onSubmit={handleSubmit}>

              <h3 className="form-group-title">Personal Information</h3>

              <div className="form-grid">

                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Your age"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>

              <h3 className="form-group-title">Health Metrics</h3>

              <div className="form-grid">

                <div className="input-group">
                  <label>Blood Pressure</label>
                  <input
                    type="text"
                    name="bloodPressure"
                    placeholder="e.g. 120/80"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                  />
                  <small>Format: systolic/diastolic</small>
                </div>

                <div className="input-group">
                  <label>Heart Rate (BPM)</label>
                  <input
                    type="number"
                    name="heartRate"
                    placeholder="e.g. 72"
                    value={formData.heartRate}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Blood Glucose (mg/dL)</label>
                  <input
                    type="number"
                    name="glucose"
                    placeholder="Enter glucose"
                    value={formData.glucose}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>BMI</label>
                  <input
                    type="number"
                    name="bmi"
                    placeholder="Enter BMI"
                    step="0.1"
                    value={formData.bmi}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <h3 className="form-group-title">Symptoms & Concerns</h3>

              <div className="input-group">
                <label>Describe your symptoms</label>
                <textarea
                  name="symptoms"
                  placeholder="Tell us about any symptoms or health concerns..."
                  rows="5"
                  value={formData.symptoms}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Health Information →
              </button>

              <p className="form-disclaimer">
                🔒 For demonstration purposes only. This screening
                does not provide a medical diagnosis.
              </p>

            </form>
          </div>
        </section>
      )}

    </div>
  );
}

export default App;