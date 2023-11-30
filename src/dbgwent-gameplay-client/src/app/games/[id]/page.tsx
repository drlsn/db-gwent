"use client";

import Card from "@/components/Card";
import CardRow from "@/components/CardRow";
import CardRowBottom from "@/components/CardRowBottom";
import CardRowPool from "@/components/CardRowPool";
import HeroPanel from "@/components/HeroPanel";
import React from "react";

export default function Game() {
  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

  return (
    <div className="flex w-full min-h-full justify-center gap-1 overflow-hidden md:py-3 bg-slate-200">
      <div className="w-[650px] min-h-full gap-1 flex-col hidden md:flex">
        <HeroPanel isEnemy={true} />
        <HeroPanel isEnemy={false}/>
      </div>
      <div className="row-group flex flex-col grow-0 items-center justify-center gap-1 w-full overflow-visible" style={{ overflowClipMargin: '100px' }}>
        <CardRow>
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRowBottom>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardRowBottom>
      </div>
      <div className="min-h-full shrink-0 flex-col gap-1 w-[250px] hidden lg:flex">
        <CardRowPool noPadding={true}>
          <Card isReversed={true} />
          <Card isReversed={true} />
        </CardRowPool>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <CardRowPool>
          <Card isReversed={true} />
          <Card isReversed={true} />
        </CardRowPool>
      </div>
    </div>
  );
}
