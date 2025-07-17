"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function DigitalTwin() {
  return (
    <motion.section
      className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">Digital Twin</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This project virtualizes industrial control systems using a
            Docker-based microservices architecture deployed in a local
            Kubernetes cluster. I built a full-stack simulation with containers
            representing controllers, PLCs, and DNP3 outstations, all
            communicating through an MQTT broker. Designed for air-gapped
            environments, the system enables secure testing of automation
            workflows and supports real-time monitoring, research, and future AI
            integration.
          </p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <h2 className="text-xl font-semibold">Key Features</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold">Architecture Overview</p>
            <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              <Image
                src="/digitaltwin-architecture.png"
                alt="Digital Twin Architecture Diagram"
                width={800}
                height={600}
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Dashboard Overview</p>
            <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              <Image
                src="/dashboard1.png"
                alt="Dashboard Screenshot 1"
                width={800}
                height={450}
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* <div className="space-y-2">
            <p className="text-sm font-semibold">Website Screenshot</p>
            <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-500 text-sm">
              [Screenshot coming soon.]
            </div>
          </div> */}
        </div>

        
      </div>
    </motion.section>
  );
}
