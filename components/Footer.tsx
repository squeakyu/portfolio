const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Richard Lu. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

