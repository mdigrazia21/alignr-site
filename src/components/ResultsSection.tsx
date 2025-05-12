
import React from "react";
export function ResultsSection() {
  const stats = [{
    id: 1,
    name: "Placements",
    value: "300+"
  }, {
    id: 2,
    name: "Retention",
    value: "96%"
  }, {
    id: 3,
    name: "Fill rate",
    value: "98%"
  }, {
    id: 4,
    name: "Average hire time",
    value: "3 weeks"
  }, {
    id: 5,
    name: "Client Savings",
    value: "$69k"
  }];
  return <section className="bg-white py-24 sm:py-[96px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            Results / Performance
          </h2>
        </div>
        
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3 lg:grid-cols-5">
          {stats.map(stat => <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600 font-dm-sans">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </dd>
            </div>)}
        </dl>
      </div>
    </section>;
}
