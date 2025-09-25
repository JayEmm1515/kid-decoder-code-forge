import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NeumoGemButton from "@/components/NeumoGemButton";

import { BookHeart, Sparkles, Activity, Brain, ToyBrick } from "lucide-react";

export default function FeatureButtonsGrid() {
  const items = [
    {
      key: "guides",
      label: "Behaviour Guides",
      icon: <BookHeart className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#6EDCD7", // mint
      to:   "#A364D8", // lavender
      href: createPageUrl("UnderstandingBehaviour"),
    },
    {
      key: "being-with",
      label: "Being With Exercise",
      icon: <Sparkles className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#84E1C7",
      to:   "#7C8CF7",
      href: createPageUrl("BeingWith"),
    },
    {
      key: "mood",
      label: "Mood Tracker",
      icon: <Activity className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#7ADCE3",
      to:   "#8A6BFF",
      href: createPageUrl("Tracking") + "?view=mood",
    },
    {
      key: "chain",
      label: "Chain Analysis",
      icon: <Brain className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#80E0D0",
      to:   "#D988F3",
      href: createPageUrl("ChainAnalysis"),
    },
    {
      key: "neuro",
      label: "Neurodivergence",
      icon: <ToyBrick className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#64DFC3",
      to:   "#B58BFF",
      href: createPageUrl("Neurodivergence"),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {items.map((it) => (
        <Link key={it.key} to={it.href} className="block">
          <NeumoGemButton
            label={it.label}
            icon={it.icon}
            from={it.from}
            to={it.to}
            size="lg"
          />
        </Link>
      ))}
    </div>
  );
}