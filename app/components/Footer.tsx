export default function Footer() {
    return (
      <footer className="py-8 px-6 bg-background border-t">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FocusFlow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="https://github.com/Rwaik-Dev" target="_blank" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="mailto:wilkermid@gmail.com" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    )
  }
  