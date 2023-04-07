import React from "react";

const base64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAh0lEQVR4nO2VQQqAIBBF3zkK6h5RB6+8VpErQzCIqJzJoEV++CD4x+fMZuAj1YABLOAi9pkRqDQAI3jYHTxoAJKfu5NOxNqKGkG23eXVAKkyIKo8oqjyiKL68YhaQbZLAbiDp+Cr+yTADBRAGc5JAPsAsGgA400X8xsr0y99XyBd+r126b+mFZW8npbmcGTCAAAAAElFTkSuQmCC";

export default function PhoneIcon() {
  return <img src={base64} alt="phone icon"></img>;
}
