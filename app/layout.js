// app/layout.js
import MainHeader from '../components/MainHeader';
import MainHeaderBackground from '../components/MainHeaderBackground';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
