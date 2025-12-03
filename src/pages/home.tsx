import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Home() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4">
        <Card className="gap-4">
          <CardHeader className="text-lg font-bold">
            <CardTitle>Welcome to the Home Page</CardTitle>
            <CardDescription>Teste 123</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>

        <Card className="gap-4">
          <CardHeader className="text-lg font-bold">
            <CardTitle>Welcome to the Home Page</CardTitle>
            <CardDescription>Teste 123</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>

        <Card className="gap-4">
          <CardHeader className="text-lg font-bold">
            <CardTitle>Welcome to the Home Page</CardTitle>
            <CardDescription>Teste 123</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}