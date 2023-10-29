from moviepy.editor import VideoFileClip

# Input video file path
video_file = "v.mp4"

# Output GIF file path
gif_file = "output.gif"

# Load the video clip
video_clip = VideoFileClip(video_file)

# Convert the video clip to a GIF
video_clip.write_gif(gif_file)

print("Video converted to GIF successfully!")
