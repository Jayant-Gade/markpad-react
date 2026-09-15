import React from "react";

export const HomeContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-neutral-200">
      {/* Title / Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Browser-Based Text Editor
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          A lightweight, private text editor that lets you create, edit, and
          organize files directly inside your web browser—no signups, no
          servers, completely offline.
        </p>
      </div>

      {/* Feature Explanations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
          <h2 className="text-lg font-semibold text-white mb-2">
            📁 In-Browser File Manager
          </h2>
          <p className="text-sm text-neutral-400">
            Create, rename, organize, and delete files inside an intuitive
            folder structure right inside your browser window.
          </p>
        </div>

        <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
          <h2 className="text-lg font-semibold text-white mb-2">
            ✍️ Clean Text Editor
          </h2>
          <p className="text-sm text-neutral-400">
            Open any saved document, write without distractions, and make live
            changes with automatic formatting support.
          </p>
        </div>

        <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
          <h2 className="text-lg font-semibold text-white mb-2">
            💾 Local Persistence
          </h2>
          <p className="text-sm text-neutral-400">
            Every document is saved securely to your browser storage. Your files
            stay on your machine, accessible anytime even without an internet
            connection.
          </p>
        </div>
      </div>

      {/* Action / Getting Started */}
      <div className="text-center">
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors">
          Start Writing
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
