import Header from './components/Header';
import Input from './components/Input';
import Content from './components/Content';

export default function App() {
  return (
    <div className="max-w-3xl mx-auto py-8 wrap-anywhere space-y-4">
      <Header />
      <Content />
      <Input />
    </div>
  );
}
