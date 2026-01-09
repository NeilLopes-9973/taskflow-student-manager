import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/50 bg-card/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span className="text-sm">TaskFlow</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
