import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-emerald-100 p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Shubhi Phartiyal</h1>
        <p className="text-lg text-gray-600 mt-2">
          Data Analyst | Data Engineer | Puzzle Lover | Mental Health Advocate
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:shubhiphartiyal@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Email</a>
          <a href="https://www.linkedin.com/in/shubhi-phartiyal/" target="_blank" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">LinkedIn</a>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-700">
            Hi, I’m Shubhi! I’m passionate about using data for impact — especially in the mental health and social good space. With a background in Computer Science, Statistics, and Business Analytics, I love turning complex data into simple, useful insights.
            I’m also obsessed with puzzles, games, and anything that bends the brain a little.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python, R, SQL, Flask, APIs, GCP, BigQuery, dbt</li>
            <li>Data Cleaning, ETL, KPI Dashboards, A/B Testing</li>
            <li>Visualization: Power BI, Tableau, Seaborn, Plotly</li>
            <li>Machine Learning: Scikit-learn, Causal Inference</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>AI-Powered Reporting System:</strong> Built a scalable Flask app with auto-insights and PDF dashboards using OpenAI, MySQL, Seaborn, and Plotly.</li>
            <li><strong>Customer Churn Prediction:</strong> Used Random Forest, XGBoost, and Logistic Regression to model churn and interpret business impact using ROC-AUC.</li>
            <li><strong>Fraud Detection Simulation:</strong> Detected anomalies using Isolation Forest and statistical checks. Created an interactive dashboard to visualize risk.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Standard Insights (2024 – Present):</strong> Developed end-to-end AI analytics platform with secure CSV uploads, automated ETL, and dashboard generation.</li>
            <li><strong>Consilio (2022 – 2024):</strong> Led metadata audits, automation pipelines, and high-volume legal data processing improving accuracy and reducing QA effort by 30%.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>UC Davis MSBA</strong>, 2024–2025 | GPA: 3.9/4.0</li>
            <li><strong>IIT Madras Diploma</strong> in Data Science, 2024</li>
            <li><strong>Christ University</strong> BSc in CS, Math, & Stats, 2022</li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        Made with ❤️, data, and puzzles by Shubhi Phartiyal
      </footer>
    </main>
  );
}
