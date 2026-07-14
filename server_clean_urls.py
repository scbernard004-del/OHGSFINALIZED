from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent

class CleanURLHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split('?', 1)[0].split('#', 1)[0]
        if path == "/" or path == "":
            return str(ROOT / "index.html")
        clean = path.strip("/")
        html_candidate = ROOT / f"{clean}.html"
        if html_candidate.exists():
            return str(html_candidate)
        return super().translate_path(path)

if __name__ == "__main__":
    os.chdir(ROOT)
    port = 8000
    print("OHGS local clean URL server running")
    print("Open: http://localhost:8000")
    print("Example: http://localhost:8000/projects")
    print("Press Ctrl + C to stop")
    ThreadingHTTPServer(("localhost", port), CleanURLHandler).serve_forever()
