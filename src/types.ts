// src/types.ts

export interface NavLink {
  id: string;
  title: string;
  url: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon?: string; // Optional: path to an SVG icon or a class name for an icon font
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'featured-works' | 'photography' | string; // Allow for custom categories
  imageUrl: string;
  description?: string;
  date?: string;
  client?: string;
  tags?: string[];
}

export interface AboutMeData {
  greeting: string;
  name: string;
  introduction: string[];
  profileImageUrl?: string;
  cvUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string; // Optional: path to an SVG icon or a class name for an icon font
}