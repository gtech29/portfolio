import Image from "next/image";
import Link from "next/link";

export default function DigitalTwin() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Digital Twin</h1>
        <p className="text-gray-700 dark:text-gray-300">
          This project virtualizes industrial control systems using Docker and
          Kubernetes. I built a full stack simulation of sensors, PLCs, and
          networked devices to test automation workflows in air-gapped
          environments. It&#39;s designed for research, reliability testing, and
          future AI integration.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            Containerized PLC, sensor, and MQTT broker using Docker Compose and
            Kubernetes
          </li>
          <li>Real-time dashboard UI built with React, Flask, and Chart.js</li>
          <li>Air-gapped deployment inside a secured Ubuntu VM</li>
          <li>
            Historical logging and anomaly detection with Isolation Forest
          </li>
          <li>Local LLM agent integration for querying system status</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Architecture Diagram</h2>
        <div className="bg-gray-100 p-4 rounded shadow">
          <Image
            src="/images/placeholder-architecture.png"
            alt="Digital Twin Architecture Diagram"
            width={800}
            height={450}
            className="rounded"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Dashboard Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src="/images/placeholder-dashboard1.png"
            alt="Dashboard Screenshot 1"
            width={400}
            height={250}
            className="rounded"
          />
          <Image
            src="/images/placeholder-dashboard2.png"
            alt="Dashboard Screenshot 2"
            width={400}
            height={250}
            className="rounded"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        
        <Link
          href="/assets/digital-twin-overview.pdf"
          className="inline-block px-5 py-2 text-sm font-medium border border-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Download One-Pager PDF
        </Link>
      </div>
    </section>
  );
}
