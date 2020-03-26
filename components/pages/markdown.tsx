import * as React from "react";
import Navigation from "../../components/molecyles/navigation";
import Content from "../../components/atoms/content";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/atoms/footer";

interface MarkdownProps {
  source: string;
}

export default ({ source }: MarkdownProps) => (
  <>
    <Navigation />
    <Content>
      <ReactMarkdown source={source} />
    </Content>
    <Footer />
  </>
);
