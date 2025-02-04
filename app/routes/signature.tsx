import React, { useState, useRef, useEffect } from "react";

const SignUpForm = () => {
  // ... (Existing state and functions for form data, errors, etc.)

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        setContext(ctx);

        // Set up canvas styles (optional)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        // Adjust canvas size for high DPI displays (optional)
        // const scale = window.devicePixelRatio || 1;
        // canvas.width = canvas.offsetWidth * scale;
        // canvas.height = canvas.offsetHeight * scale;
        // ctx.scale(scale, scale);
      }
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (context) {
      setSignatureData(canvasRef.current?.toDataURL() || null); // Save signature as data URL
    }
  };

  const handleMouseOut = () => {
    setIsDrawing(false);
    if (context) {
      setSignatureData(canvasRef.current?.toDataURL() || null); // Save signature as data URL
    }
  };

  const clearSignature = () => {
    if (context && canvasRef.current) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setSignatureData(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ... (Existing validation logic)
    console.log("SignatureData: ", signatureData);
    // if (validateForm()) {
    //   try {
    //     const formDataWithSignature = { ...formData, signature: signatureData }; // Include signature in form data
    //     // ... (Rest of your form submission logic using formDataWithSignature)
    //     const response = await fetch("/api/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formDataWithSignature), // Send signature data to the server
    //     });
    //     // ...
    //   } catch (error) {
    //     // ...
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (Existing form fields) */}

      <div>
        <label htmlFor="signature">Signature:</label>
        <canvas
          ref={canvasRef}
          id="signature"
          width={300} // Adjust as needed
          height={150} // Adjust as needed
          style={{ border: "1px solid black", cursor: "crosshair" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
        />
        <button type="button" onClick={clearSignature}>
          Clear Signature
        </button>
        {signatureData && (
          <input type="hidden" name="signature" value={signatureData} />
        )}
      </div>

      {/* ... (Rest of your form elements) */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
