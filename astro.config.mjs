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
					label: 'Session 1: LLM to Agent',
					translations: { tr: 'Oturum 1: LLM\'den Agent\'a' },
					badge: { text: 'Days 1-2', variant: 'tip' },
					items: [
						{ label: '1. What Is an LLM?', slug: 'session-1/01-what-is-llm', translations: { tr: '1. LLM Nedir?' } },
						{ label: '2. Limits of a Bare LLM', slug: 'session-1/02-limits-of-llm', translations: { tr: '2. Bir LLM\'in Limitleri' } },
						{ label: '3. Tools & MCP', slug: 'session-1/03-mcp', translations: { tr: '3. Araçlar ve MCP' } },
						{ label: '4. LangChain — Why a Framework?', slug: 'session-1/04-langchain', translations: { tr: '4. LangChain — Neden Framework?' } },
						{ label: '5. LangGraph — Stateful Agents', slug: 'session-1/05-langgraph', translations: { tr: '5. LangGraph — Durumlu Agent\'lar' } },
						{ label: '6. Production Agent', slug: 'session-1/06-production-agent', translations: { tr: '6. Production Agent' } },
					],
				},
				{
					label: 'Session 2: Knowledge-Powered Agents',
					translations: { tr: 'Oturum 2: Bilgiyle Güçlendirilmiş Agent\'lar' },
					badge: { text: 'Days 3-4', variant: 'note' },
					items: [
						{ label: '7. The Knowledge Problem', slug: 'session-2/07-knowledge-problem', translations: { tr: '7. Bilgi Problemi' } },
						{ label: '8. Embeddings & Semantic Search', slug: 'session-2/08-embeddings', translations: { tr: '8. Embedding\'ler ve Semantik Arama' } },
						{ label: '9. The RAG Pipeline', slug: 'session-2/09-rag-pipeline', translations: { tr: '9. RAG Pipeline' } },
						{ label: '10. Advanced RAG', slug: 'session-2/10-advanced-rag', translations: { tr: '10. İleri RAG Teknikleri' } },
						{ label: '11. Production RAG', slug: 'session-2/11-production-rag', translations: { tr: '11. Production RAG' } },
						{ label: '12. Agentic RAG — Grand Finale', slug: 'session-2/12-agentic-rag', translations: { tr: '12. Agentic RAG — Final' } },
					],
				},
			],
		}),
	],
});
