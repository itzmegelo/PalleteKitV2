const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-950 text-center text-gray-600 dark:text-gray-400 w-full">
      <p>
        © {new Date().getFullYear()} PaletteKit. Crafted with ❤️ for creators.
      </p>
    </footer>
  );
};

export default Footer;
