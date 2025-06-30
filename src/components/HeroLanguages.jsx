// src/components/HeroLanguages.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

export default function HeroLanguages() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    async function fetchAllLanguages() {
      try {
        // 1) Grab your repos
        const { data: repos } = await axios.get(
          'https://api.github.com/users/datadrivensarab/repos?per_page=100'
        )

        // 2) Fire off a request for each repo's languages_url
        const langPromises = repos.map((repo) =>
          axios.get(repo.languages_url)
        )
        const langResponses = await Promise.all(langPromises)

        // 3) Aggregate bytes per language across all repos
        const byteCounts = langResponses.reduce((acc, { data }) => {
          // data is an object: { JavaScript: 12345, Python: 67890, … }
          Object.entries(data).forEach(([lang, bytes]) => {
            acc[lang] = (acc[lang] || 0) + bytes
          })
          return acc
        }, {})

        // 4) Build chart-ready structure
        const labels = Object.keys(byteCounts)
        const values = Object.values(byteCounts)
        const bgColors = [
          '#f472b6', '#818cf8', '#34d399', '#fcd34d',
          '#60a5fa', '#fb7185', '#a78bfa', '#fbbf24'
        ]

        setChartData({
          labels,
          datasets: [{
            data: values,
            backgroundColor: bgColors.slice(0, labels.length),
            borderWidth: 0,
          }],
        })
      } catch (err) {
        console.error('Error fetching GitHub languages:', err)
      }
    }
    fetchAllLanguages()
  }, [])

  if (!chartData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-indigo-50 to-yellow-50">
        <p className="text-gray-500 animate-pulse">Loading languages…</p>
      </section>
    )
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-indigo-50 to-yellow-50 overflow-hidden"
    >
      {/* Donut chart background */}
      <div className="absolute inset-0 opacity-20">
        <Doughnut
          data={chartData}
          options={{
            cutout: '70%',
            responsive: true,
            maintainAspectRatio: false,
            animation: { animateRotate: true, duration: 2000 },
            plugins: { legend: { display: false } },
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Sarabpreet
        </h1>
        <p className="text-xl text-gray-700">
          Turning code into clarity.
        </p>
      </div>
    </section>
  )
}
