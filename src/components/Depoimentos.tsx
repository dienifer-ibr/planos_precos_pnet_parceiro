import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    thumbnail:
      "https://i.ytimg.com/vi/YXUrWnV7yFQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCrLSOfaWvi0kuQKUsq-Cb86nHR4A",
    duration: "00:58",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "YXUrWnV7yFQ",
  },
  {
    id: "v2",
    title: "Depoimento Elizandra Ziih",
    thumbnail:
      "https://i.ytimg.com/vi/pDSvqAs4CWI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDTaJUXc_KNjZDGuHh4O-NyTNTQtw",
    duration: "00:48",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "pDSvqAs4CWI",
  },
  {
    id: "v3",
    title: "Por que a ParanhanaNET é considerada o melhor provedor de internet?",
    thumbnail:
      "https://i.ytimg.com/vi/ZKuZLm3OJ3s/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4AY4CgALgA4oCDAgAEAEYZSBMKEEwDw==&rs=AOn4CLBv-Ay_a5A0-ZSi9vEHCrm9f-ObRg",
    duration: "03:45",
    channelName: "ParanhanaNet",
    views: "",
    youtubeId: "ZKuZLm3OJ3s",
  },
];

const reviewsData: ReviewData[] = [
  {
    id: "r1",
    name: "Djonatan Djou",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjV323UbqFiszOJ6KCJ8NBK2tMNTav2BHy9Z1Qwk8oaMONpQUbAoRA=w90-h90-p-rp-mo-br100",
    rating: 5,
    comment: "Melhor internet que já tive!",
    date: "2025-01-07",
    location: "Parobé, RS",
  },
  {
    id: "r2",
    name: "Ana Costa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "Melhor provedor da região! Suporte técnico excepcional e internet de qualidade.",
    date: "2025-07-25",
    location: "Parobé, RS",
  },
  {
    id: "r3",
    name: "Fernanda Lima",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "Atendimento personalizado e internet de fibra óptica excelente. Muito satisfeita!",
    date: "2025-08-10",
    location: "Três Coroas, RS",
  },
  {
    id: "r4",
    name: "Lucas Pereira",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Excelente suporte e conexão estável. Recomendo!",
    date: "2025-08-11",
    location: "Novo Hamburgo, RS",
  },
  {
    id: "r5",
    name: "Rafael Souza",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Internet super rápida, ótimo atendimento!",
    date: "2025-08-13",
    location: "Gramado, RS",
  },
  {
    id: "r6",
    name: "Pedro Henrique",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Excelente atendimento e velocidade de internet incrível!",
    date: "2025-08-13",
    location: "Bento Gonçalves, RS",
  },
];

// ----------------- Componente -----------------
const ReviewsShowcase = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isHoveringReview, setIsHoveringReview] = useState(false);

  // ----------- Responsividade desktop -----------
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoMaxIndex = Math.max(0, videosData.length - itemsPerView);
  const reviewMaxIndex = Math.max(0, reviewsData.length - itemsPerView);

  const goToNextVideo = () =>
    setVideoIndex((prev) => (prev >= videoMaxIndex ? 0 : prev + 1));
  const goToPreviousVideo = () =>
    setVideoIndex((prev) => (prev <= 0 ? videoMaxIndex : prev - 1));

  const goToNextReview = () =>
    setReviewIndex((prev) => (prev >= reviewMaxIndex ? 0 : prev + 1));
  const goToPreviousReview = () =>
    setReviewIndex((prev) => (prev <= 0 ? reviewMaxIndex : prev - 1));

  const openVideo = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
  };

  useEffect(() => {
    if (isHoveringVideo) return;
    const interval = setInterval(goToNextVideo, 4000);
    return () => clearInterval(interval);
  }, [videoIndex, isHoveringVideo]);

  useEffect(() => {
    if (isHoveringReview) return;
    const interval = setInterval(goToNextReview, 4000);
    return () => clearInterval(interval);
  }, [reviewIndex, isHoveringReview]);

  return (
    <section className="relative py-16 min-h-screen bg-gradient-to-b from-white to-pink-400">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título + Navegação Vídeos */}
        <div className="mb-16 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">
              O que dizem nossos clientes?
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={goToPreviousVideo}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNextVideo}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Carrossel Vídeos */}
          <div
            className="relative overflow-hidden flex items-center h-64 md:h-80 lg:h-96"
            onMouseEnter={() => setIsHoveringVideo(true)}
            onMouseLeave={() => setIsHoveringVideo(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-4 lg:gap-6"
              style={{
                transform: `translateX(-${videoIndex * (100 / itemsPerView)}%)`,
                width: `${(videosData.length / itemsPerView) * 100}%`,
              }}
            >
              {videosData.map((video) => (
                <Card
                  key={video.id}
                  className="group relative flex-shrink-0 hover:scale-[1.02] transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
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
                    <h3 className="font-bold text-base lg:text-lg">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.channelName}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Carrossel Reviews */}
        <div className="flex items-center h-64 md:h-80 lg:h-96">
          <div
            className="relative overflow-hidden w-full"
            onMouseEnter={() => setIsHoveringReview(true)}
            onMouseLeave={() => setIsHoveringReview(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-4"
              style={{
                transform: `translateX(-${reviewIndex * (100 / itemsPerView)}%)`,
                width: `${(reviewsData.length / itemsPerView) * 100}%`,
              }}
            >
              {reviewsData.map((review) => (
                <Card
                  key={review.id}
                  className="group relative flex-shrink-0 hover:scale-[1.02] transition-all duration-300 p-3"
                  style={{
                    width: window.innerWidth >= 1024 ? "300px" : `${100 / itemsPerView}%`}}
                  onMouseEnter={() => setHoveredItem(review.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover lg:w-16 lg:h-16"
                    />
                    <div>
                      <h3 className="font-bold lg:text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
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
                            } lg:h-6 lg:w-6`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm lg:text-base">{review.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsShowcase;