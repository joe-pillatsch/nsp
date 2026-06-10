// tweaks-app.jsx — wires the Tweaks panel to NSP page state

function NSPTweaks() {
  const [t, setTweak] = useTweaks(window.__NSP_TWEAKS);
  const h = document.documentElement;

  // Apply attribute changes whenever values move
  React.useEffect(() => { h.setAttribute('data-accent', t.accent); }, [t.accent]);
  React.useEffect(() => { h.setAttribute('data-display', t.display); }, [t.display]);
  React.useEffect(() => { h.setAttribute('data-layout', t.layout); }, [t.layout]);
  React.useEffect(() => {
    const stats = document.querySelector('.stats');
    if (stats) stats.style.display = t.showStats === false ? 'none' : '';
  }, [t.showStats]);
  React.useEffect(() => {
    const press = document.querySelector('.press');
    if (press) press.style.display = t.showQuotes === false ? 'none' : '';
  }, [t.showQuotes]);

  return (
    <TweaksPanel>
      <TweakSection label="Gallery layout">
        <TweakRadio
          label="Layout"
          value={t.layout}
          options={[
            { value: 'cinematic', label: 'Cinema' },
            { value: 'grid',      label: 'Grid' },
            { value: 'stacked',   label: 'Stack' },
          ]}
          onChange={(v) => setTweak('layout', v)}
        />
      </TweakSection>

      <TweakSection label="Accent">
        <TweakColor
          label="Tone"
          value={({ stone: '#e8dfcd', brick: '#d65a3b', sage: '#9fb389', mono: '#f6f1e7' }[t.accent])}
          options={['#e8dfcd', '#d65a3b', '#9fb389', '#f6f1e7']}
          onChange={(hex) => {
            const name = { '#e8dfcd': 'stone', '#d65a3b': 'brick', '#9fb389': 'sage', '#f6f1e7': 'mono' }[String(hex).toLowerCase()] || 'stone';
            setTweak('accent', name);
          }}
        />
      </TweakSection>

      <TweakSection label="Display type">
        <TweakRadio
          label="Headlines"
          value={t.display}
          options={[
            { value: 'serif',      label: 'Serif' },
            { value: 'newsreader', label: 'News' },
            { value: 'grotesk',    label: 'Grotesk' },
          ]}
          onChange={(v) => setTweak('display', v)}
        />
      </TweakSection>

      <TweakSection label="Sections">
        <TweakToggle
          label="By the numbers"
          value={t.showStats !== false}
          onChange={(v) => setTweak('showStats', v)}
        />
        <TweakToggle
          label="Words / quotes"
          value={t.showQuotes !== false}
          onChange={(v) => setTweak('showQuotes', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const __nspRoot = document.createElement('div');
document.body.appendChild(__nspRoot);
ReactDOM.createRoot(__nspRoot).render(<NSPTweaks />);
