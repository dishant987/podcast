import * as React from "react";
import { cn } from "../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 20, y: -20, opacity: 0.9 },
};

const secondaryVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const InputWithThumbnail = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    const [imagePreview, setImagePreview] = React.useState(null);
    const fileInputRef = React.useRef(null);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    function handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const isValidType = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"].includes(file.type);
        const isValidSize = file.size <= 5 * 1024 * 1024; // Maximum file size of 5MB

        if (isValidType && isValidSize) {
          setImagePreview(URL.createObjectURL(file)); // Set image preview URL
        } else {
          console.error("File must be an image (jpg, png, etc.) and not greater than 5MB in size.");
        }
      }
    }

    function handleClick() {
      fileInputRef.current?.click();
    }

    return (
      <div className="relative">
        <motion.div
          style={{
            background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="p-[2px] rounded-lg transition duration-300 group/input"
          onClick={handleClick}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            {...props}
          />
          <div className="relative flex items-center justify-center">
            {imagePreview ? (
              <motion.img
                src={imagePreview}
                alt="Thumbnail Preview"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-lg shadow-md w-full max-w-xs mx-auto"
              />
            ) : (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)] cursor-pointer"
                )}
                onClick={handleClick}
              >
                <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }
);
InputWithThumbnail.displayName = "InputWithThumbnail";

export { InputWithThumbnail };
