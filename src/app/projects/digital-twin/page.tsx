import Image from "next/image";
import Link from "next/link";

export default function DigitalTwin() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Digital Twin</h1>
        <p className="text-gray-700 dark:text-gray-300">
          This project virtualizes industrial control systems using a
          Docker-based microservices architecture deployed in a local Kubernetes
          cluster. I built a full-stack simulation with containers representing
          controllers, PLCs, and DNP3 outstations, all communicating through an
          MQTT broker. Designed for air-gapped environments, the system enables
          secure testing of automation workflows and supports real-time
          monitoring, research, and future AI integration.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            Simulated PLC, DNP3 outstation, sensor, and MQTT broker using Docker
            containers.
          </li>
          <li>
            Deployed all services into a local Kubernetes cluster with no
            external dependencies.
          </li>
          <li>
            Enabled real-time monitoring through a React, Flask, and Chart.js
            dashboard.
          </li>
          <li>
            Verified cross-VM communication with industry tools like Tracer TU
            and JENEsys.
          </li>
          <li>
            Packaged for portable deployment via USB or VM image for offline
            operation.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Architecture Diagram</h2>
        <div className="bg-gray-100 p-4 rounded shadow">
          <Image
            src="/digitaltwin-architecture.png"
            alt="Digital Twin Architecture Diagram"
            width={600}
            height={450}
            className="rounded"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Dashboard Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <Image
            src="/dashboard1.png"
            alt="Dashboard Screenshot 1"
            width={600}
            height={250}
            className="rounded"
          />
          {/* <Image
            src="/images/placeholder-dashboard2.png"
            alt="Dashboard Screenshot 2"
            width={400}
            height={250}
            className="rounded"
          /> */}
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
