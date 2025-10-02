import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/pnet-transparente.png";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  channelName: string;
  views: string;
  youtubeId: string;
}

interface ReviewData {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

const videosData: VideoData[] = [
  {
    id: "v1",
    title: "Depoimento Amanda Farias",
    thumbnail: "https://i.ytimg.com/vi/YXUrWnV7yFQ/hqdefault.jpg",
    duration: "00:58",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "YXUrWnV7yFQ",
  },
  {
    id: "v2",
    title: "Depoimento Elizandra Ziih",
    thumbnail: "https://i.ytimg.com/vi/pDSvqAs4CWI/hqdefault.jpg",
    duration: "00:48",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "pDSvqAs4CWI",
  },
  {
    id: "v3",
    title: "Por que a ParanhanaNET é considerada o melhor provedor de internet?",
    thumbnail: "https://i.ytimg.com/vi/ZKuZLm3OJ3s/hqdefault.jpg",
    duration: "03:45",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "ZKuZLm3OJ3s",
  },
];

const reviewsData: ReviewData[] = [
  {
    id: "r1",
    name: "alberto bohler",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjU4LzKCuCdTRPYsjVrZ3dAsY_zTR-eVVSag3Wl2_frCGPcK6-II2g=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment: "Sem dúvida o melhor provedor de Internet do vale",
    date: "2025-09-02",
    location: "",
  },
  {
    id: "r2",
    name: "Rodrigo Silva Hessler",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLTVx4xaFNrRqS8uQSh8K5E6KWtdH0CB03RfjVyfRS2p-4wUw=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment:
      "Internet de excelência e suporte perfeito!! 😍😍",
    date: "2025-07-25",
    location: "",
  },
  {
    id: "r3",
    name: "Djonatan Djou",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjV323UbqFiszOJ6KCJ8NBK2tMNTav2BHy9Z1Qwk8oaMONpQUbAoRA=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment:
      "Melhor internet que já tive!",
    date: "2025-02-10",
    location: "",
  },
  {
    id: "r4",
    name: "Kah Rocha",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWuHPQbl431hNC6j1QTaKLBV2-_UV8t5xDVzrGP3OVpLwlD2gnT=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment: "A melhor internet",
    date: "2025-08-11",
    location: "",
  },
  {
    id: "r5",
    name: "gilberto luiz dos santos",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWDkViNjMMvPLDj71T1VjcUMuo2AZHHuJI7M240FMMCsZttUHDW4A=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment: "Empresa muito séria, prioriza sempre o bom atendimento!!!",
    date: "2024-09-13",
    location: "",
  },
  {
    id: "r6",
    name: "Patrick Ruizdias",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUFiI1Yo8lKpqIVpHGF62DSOAubgRwoPwE_fXUMvm49cxAxZcpJXA=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment: "Muito top Recomendadíssimo!!!",
    date: "2024-09-10",
    location: "",
  },
];

const ReviewsShowcase = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHoveringReviews, setIsHoveringReviews] = useState(false);

  const goToNextVideo = () =>
    setVideoIndex((prev) => (prev >= videosData.length - 1 ? 0 : prev + 1));

  const goToPreviousVideo = () =>
    setVideoIndex((prev) => (prev <= 0 ? videosData.length - 1 : prev - 1));

  const openVideo = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
  };

  const reviewsLoop = [...reviewsData, ...reviewsData];

  return (
    <section className="relative py-16 min-h-screen bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800">
      <img
        src={Logo}
        alt="Background decorativo"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none -top-16 -left-48"
        style={{ zIndex: 0, maxWidth: "800px" }}
      />

      <div className="relative max-w-16xl mx-auto px-4 sm:px-6 lg:px-8 mb-48">
        <div className="mb-16 flex flex-col">
          <div className="flex items-center justify-between mb-8 lg:flex-col lg:items-center lg:justify-center">
            <div className="lg:text-center">
              <h1 className="text-3xl lg:text-6xl font-bold text-white">
                <strong>FeedBacks</strong>
              </h1>
              <h2 className="text-2xl lg:text-2xl font-bold text-white mt-2">
                O que dizem nossos clientes?
              </h2>
            </div>
            <div className="flex gap-2 lg:hidden">
              <Button variant="outline" size="icon" onClick={goToPreviousVideo}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNextVideo}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>


          <div className="relative flex justify-center gap-6 top-16 flex-wrap lg:flex-nowrap">
            {videosData.map((video, idx) => (
              <Card
                key={video.id}
                className={`group relative flex-shrink-0 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${idx === videoIndex ? "block" : "hidden"
                  } lg:block`}
                style={{
                  width: window.innerWidth < 768 ? "100%" : "320px",
                  maxWidth: "320px",
                }}
                onMouseEnter={() => setHoveredItem(video.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => openVideo(video.youtubeId)}
              >
                <div className="relative aspect-video overflow-hidden lg:rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {video.duration}
                  </div>
                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center ${hoveredItem === video.id ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                  >
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="font-bold text-base lg:text-lg">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.channelName}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden top-24"
          onMouseEnter={() => setIsHoveringReviews(true)}
          onMouseLeave={() => setIsHoveringReviews(false)}
        >
          <div
            className={`flex gap-4 animate-scroll ${isHoveringReviews ? "pause" : ""
              }`}
          >
            {reviewsLoop.map((review, idx) => (
              <Card
                key={review.id + idx}
                className="flex-shrink-0 w-72 p-4 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <p className="text-sm">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-scroll {
          animation: scroll-left 10s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsShowcase;