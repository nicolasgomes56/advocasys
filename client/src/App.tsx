export function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Advocasys
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Sistema de Advocacia com fonte Poppins
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Diferentes pesos da fonte Poppins:
          </h2>
          <div className="space-y-2">
            <p className="font-thin">Poppins Thin (100)</p>
            <p className="font-light">Poppins Light (300)</p>
            <p className="font-normal">Poppins Normal (400)</p>
            <p className="font-medium">Poppins Medium (500)</p>
            <p className="font-semibold">Poppins Semibold (600)</p>
            <p className="font-bold">Poppins Bold (700)</p>
            <p className="font-extrabold">Poppins Extrabold (800)</p>
            <p className="font-black">Poppins Black (900)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
