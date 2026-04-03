// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Training Series',
			description: 'Agent Development & RAG Training Series',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				tr: { label: 'Türkçe', lang: 'tr' },
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					content: `
(function() {
  var PASS_HASH = '954dfa4c9888a6fb15dc8b9fdede2ab1472fe9aed96c72e7e95e302f159ae4d5';

  function sha256(str) {
    var buffer = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', buffer).then(function(hash) {
      return Array.from(new Uint8Array(hash)).map(function(b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  function applyMode() {
    if (localStorage.getItem('presenterMode') === 'active') {
      document.documentElement.setAttribute('data-presenter', 'true');
    } else {
      document.documentElement.removeAttribute('data-presenter');
    }
  }

  applyMode();

  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') {
      e.preventDefault();
      if (localStorage.getItem('presenterMode') === 'active') {
        localStorage.removeItem('presenterMode');
        applyMode();
        location.reload();
      } else {
        var pwd = prompt('Presenter Mode — Enter password:');
        if (pwd) {
          sha256(pwd).then(function(hash) {
            if (hash === PASS_HASH) {
              localStorage.setItem('presenterMode', 'active');
              applyMode();
              location.reload();
            } else {
              alert('Wrong password.');
            }
          });
        }
      }
    }
  });
})();
					`,
				},
			],
			sidebar: [
				{
					label: 'Welcome',
					translations: { tr: 'Hoş Geldiniz' },
					items: [
						{ label: 'Training Overview', slug: 'index' },
					],
				},
				{
					label: 'Agent Development',
					translations: { tr: 'Agent Geliştirme' },
					badge: { text: '2 Days', variant: 'tip' },
					items: [
						{ label: '1. Why Agents?', slug: 'agent-development/01-why-agents' },
						{ label: '2. MCP — The USB-C of AI', slug: 'agent-development/02-mcp' },
						{ label: '3. LangChain Fundamentals', slug: 'agent-development/03-langchain' },
						{ label: '4. LangGraph — Stateful Agents', slug: 'agent-development/04-langgraph' },
						{ label: '5. Putting It All Together', slug: 'agent-development/05-integration' },
					],
				},
				{
					label: 'RAG',
					translations: { tr: 'RAG' },
					badge: { text: '2 Days', variant: 'note' },
					items: [
						{ label: '1. The Knowledge Problem', slug: 'rag/01-knowledge-problem' },
						{ label: '2. Embeddings & Vectors', slug: 'rag/02-embeddings' },
						{ label: '3. The RAG Pipeline', slug: 'rag/03-rag-pipeline' },
						{ label: '4. Advanced RAG', slug: 'rag/04-advanced-rag' },
						{ label: '5. Production RAG', slug: 'rag/05-production-rag' },
					],
				},
			],
		}),
	],
});
