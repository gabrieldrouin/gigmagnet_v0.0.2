/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qnrPvaDr4ix
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Component() {
  const [openCards, setOpenCards] = useState(false);
  console.log(openCards);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setOpenCards(!openCards);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-6">
        <Image
          priority
          src="/mylogo-1.png"
          width={80}
          height={80}
          alt="Gigmagnet logo"
        />
        <div className="flex items-center justify-center w-full max-w-[584px] rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-md focus-within:border-gray-400 dark:border-gray-700 dark:focus-within:border-gray-500">
          <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <input
            className="flex-1 bg-transparent px-3 text-base text-gray-900 outline-none dark:text-gray-50"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <MapPinIcon className="h-4 w-4 mr-2" />
                Location
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-4">
              <div className="grid gap-4">
                <Input placeholder="Enter location" />
                <div className="grid gap-2">
                  <Label htmlFor="radius">Radius</Label>
                  <Slider defaultValue={[50]} id="radius" max={500} step={10} />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <UsersIcon className="h-4 w-4 mr-2" />
                Capacity
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="min-seats">Min Seats</Label>
                  <Select defaultValue="2" id="min-seats">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select min seats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="max-seats">Max Seats</Label>
                  <Select defaultValue="10" id="max-seats">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select max seats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <TagIcon className="h-4 w-4 mr-2" />
                Genre
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-4">
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="genre-rock" />
                  Rock{"\n                            "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="genre-latin" />
                  Latin{"\n                            "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="genre-pop" />
                  Pop{"\n                            "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="genre-jazz" />
                  Jazz{"\n                            "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="genre-classical" />
                  Classical{"\n                            "}
                </Label>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {openCards ? (
        <div className="grid grid-cols-3 gap-6 mt-12">
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Roxy Music Hall</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Live music venue featuring local and touring acts.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Indie Lounge</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Intimate venue showcasing up-and-coming indie artists.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Jazz Cellar</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Cozy underground jazz club featuring local and touring acts.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Rhythm Room</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Lively music venue featuring a variety of genres.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Acoustic Lounge</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Intimate acoustic music venue featuring singer-songwriters.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Venue Image"
                className="w-full h-full object-cover"
                height="192"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold">The Bluegrass Barn</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Rustic venue showcasing bluegrass and folk music.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Capacity: 250.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Sherbrooke
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <div className="fixed bottom-40 text-sm text-center">
          (Press enter to show cards, refresh to reset.)
        </div>
      )}
    </main>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
