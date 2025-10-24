"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  const openGallery = (project) => {
    // Only open gallery if the project has media array (thermal imaging)
    if (project.media && project.media.length > 1) {
      setSelectedProject(project);
      setCurrentMediaIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedProject && selectedProject.media) {
      setCurrentMediaIndex((prev) => 
        prev < selectedProject.media.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevMedia = () => {
    if (selectedProject && selectedProject.media) {
      setCurrentMediaIndex((prev) => 
        prev > 0 ? prev - 1 : selectedProject.media.length - 1
      );
    }
  };

  const isVideo = (filename) => {
    return filename.toLowerCase().endsWith('.mov') || 
           filename.toLowerCase().endsWith('.mp4') || 
           filename.toLowerCase().endsWith('.avi');
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Aerial Portfolio</h2>
        <p className="text-lg text-gray-600">
          Explore a sample of our precision aerial imaging projects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={`${p.title}-${i}`}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => openGallery(p)}
          >
            <Image
              src={p.img}
              alt={p.title}
              width={400}
              height={256}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-xl font-semibold transition">
              <span className="text-center">{p.title}</span>
              {p.media && p.media.length > 1 && (
                <span className="text-sm mt-2 opacity-80">
                  {p.media.length} thermal images
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ✕
              </button>

              {/* Navigation Arrows */}
              {selectedProject.media && selectedProject.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Media Display */}
              <div className="bg-white rounded-lg overflow-hidden">
                {selectedProject.media && selectedProject.media[currentMediaIndex] && (
                  <div className="relative">
                    {isVideo(selectedProject.media[currentMediaIndex]) ? (
                      <video
                        src={selectedProject.media[currentMediaIndex]}
                        controls
                        className="w-full max-h-[70vh] object-contain"
                        autoPlay
                        muted
                      />
                    ) : (
                      <Image
                        src={selectedProject.media[currentMediaIndex]}
                        alt={`${selectedProject.title} - Media ${currentMediaIndex + 1}`}
                        width={800}
                        height={600}
                        className="w-full max-h-[70vh] object-contain"
                      />
                    )}
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  {selectedProject.media && selectedProject.media.length > 1 && (
                    <p className="text-gray-600">
                      {currentMediaIndex + 1} of {selectedProject.media.length} media files
                    </p>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {selectedProject.media && selectedProject.media.length > 1 && (
                  <div className="p-4 border-t bg-gray-50">
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedProject.media.map((media, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentMediaIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                            index === currentMediaIndex
                              ? 'border-blue-500'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {isVideo(media) ? (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-xs">🎥</span>
                            </div>
                          ) : (
                            <Image
                              src={media}
                              alt={`Thumbnail ${index + 1}`}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}







