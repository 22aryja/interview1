import ChannelsWidget from "./features/channels";
import ClientWidget from "./features/clients";
import ProductsWidget from "./features/products";

function App() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-[#333333] p-10 gap-6">
      <ChannelsWidget />
      <ProductsWidget />
      <ClientWidget />
    </main>
  );
}

export default App;
