import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const Section = ({ title, children }) => (
  <section>
    <h2 style={{ color: '#4338ca' }}>{title}</h2>
    <div>{children}</div>
  </section>
);

export default function App() {
  return (
    <div>
      <header style={{
        background: 'linear-gradient(to right, #6366f1, #818cf8)',
        padding: '2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <img src="/profile.jpg" alt="Profile" style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '4px solid white'
        }} />
        <h1 style={{ margin: 0 }}>Pradeep Reddy Gunna</h1>
        <p>Cloud & DevOps Engineer | AWS | Kubernetes | CI/CD | Terraform</p>
      </header>

      <Section title="Summary">
        <p>
          Motivated Cloud & DevOps Engineer with hands-on experience at CNET Global Solutions.
          Skilled in AWS, Terraform, Kubernetes, Docker, Jenkins, and monitoring with Prometheus/Grafana.
        </p>
      </Section>

      <Section title="Experience">
        <ul>
          <li><strong>DevOps Trainee</strong> – CNET Global Solutions (May 2025 – Present)</li>
          <li>CI/CD pipelines with GitHub Actions, Jenkins</li>
          <li>Docker + Kubernetes deployments</li>
          <li>Cloud: AWS & GCP</li>
        </ul>
      </Section>

      <Section title="Skills">
        <p>AWS, Terraform, Docker, Kubernetes, GitHub Actions, Jenkins, Python, Bash, Prometheus, Grafana</p>
      </Section>

      <Section title="Projects">
        <ul>
          <li>CI/CD Pipeline Automation</li>
          <li>Scalable AWS Infra with Terraform</li>
          <li>Kubernetes Microservices on AWS EKS</li>
          <li>Image Captioning with Deep Learning</li>
        </ul>
      </Section>

      <Section title="Certifications">
        <ul>
          <li>AWS Certified SysOps Administrator – Associate</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Docker Foundations</li>
        </ul>
      </Section>

      <Section title="Education">
        <p>M.S. in Computer Science – UTRGV (2023–2024)</p>
        <p>B.Tech in ECE – JNTU Hyderabad (2019–2022)</p>
      </Section>

      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', color: '#666' }}>
        © 2025 Pradeep Reddy Gunna | Contact: gunnareddy.pradeep@gmail.com
      </footer>
    </div>
  );
}