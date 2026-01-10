import {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  List,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
  Coral,
  Fort,
  Obvia,
  Sailec,
  Termina,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

function ClassName({ children }: { children: string }) {
  return (
    <code className='text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground font-mono block mt-2 w-fit'>
      {children}
    </code>
  )
}

export default function TypographyPage() {
  return (
    <div className='py-10 space-y-10 max-w-7xl mx-auto'>
      <div>
        <H1>Typography System</H1>
        <Lead>A showcase of the typography styles available in Project Creo.</Lead>
      </div>

      <section className='space-y-6'>
        <div className='border-b pb-2'>
          <H2>Headings (Gabarito)</H2>
        </div>

        <div className='space-y-6'>
          <div>
            <H1>Heading 1</H1>
            <div className='mt-2'>
              <Muted>Gabarito - ExtraBold - 4xl/5xl</Muted>
              <ClassName>
                scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-gabarito
              </ClassName>
            </div>
          </div>
          <div>
            <H2>Heading 2</H2>
            <div className='mt-2'>
              <Muted>Gabarito - Semibold - 3xl</Muted>
              <ClassName>
                scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0
                font-gabarito
              </ClassName>
            </div>
          </div>
          <div>
            <H3>Heading 3</H3>
            <div className='mt-2'>
              <Muted>Gabarito - Semibold - 2xl</Muted>
              <ClassName>scroll-m-20 text-2xl font-semibold tracking-tight font-gabarito</ClassName>
            </div>
          </div>
          <div>
            <H4>Heading 4</H4>
            <div className='mt-2'>
              <Muted>Gabarito - Semibold - xl</Muted>
              <ClassName>scroll-m-20 text-xl font-semibold tracking-tight font-gabarito</ClassName>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <div className='border-b pb-2'>
          <H2>Body & Text (Inter)</H2>
        </div>

        <div className='grid gap-8'>
          <div>
            <P>
              This is a standard paragraph component. The quick brown fox jumps over the lazy dog.
              Typography is the art and technique of arranging type to make written language
              legible, readable, and appealing when displayed.
            </P>
            <div className='mt-2'>
              <Muted>Inter - Regular - 16px</Muted>
              <ClassName>leading-7 [&:not(:first-child)]:mt-6 font-inter</ClassName>
            </div>
          </div>

          <div>
            <Lead>This is a lead paragraph, used for introductions or summaries.</Lead>
            <div className='mt-2'>
              <Muted>Inter - Regular - 20px (Muted Foreground)</Muted>
              <ClassName>text-xl text-muted-foreground font-inter</ClassName>
            </div>
          </div>

          <div>
            <Large>This is large text.</Large>
            <div className='mt-2'>
              <Muted>Inter - Semibold - 18px</Muted>
              <ClassName>text-lg font-semibold font-inter</ClassName>
            </div>
          </div>

          <div>
            <Small>This is small text.</Small>
            <div className='mt-2'>
              <Muted>Inter - Medium - 14px</Muted>
              <ClassName>text-sm font-medium leading-none font-inter</ClassName>
            </div>
          </div>
          <div>
            <Muted>This is muted text.</Muted>
            <div className='mt-2'>
              <Muted>Inter - Regular - 14px (Muted Foreground)</Muted>
              <ClassName>text-sm text-muted-foreground font-inter</ClassName>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <div className='border-b pb-2'>
          <H2>Elements</H2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-2'>
            <H3>Blockquote</H3>
            <Blockquote>
              "After all," he said, "everyone has a favorite font. Mine is Inter."
            </Blockquote>
            <ClassName>mt-6 border-l-2 pl-6 italic font-inter</ClassName>
          </div>

          <div className='space-y-2'>
            <H3>List</H3>
            <List>
              <li>First level list item</li>
              <li>Second level list item</li>
              <li>Third level list item</li>
            </List>
            <ClassName>my-6 ml-6 list-disc [&gt;li]:mt-2 font-inter</ClassName>
          </div>
          <div className='space-y-2'>
            <H3>Inline Code</H3>
            <P>
              You can install components using <InlineCode>pnpm add component</InlineCode>.
            </P>
            <ClassName>
              relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold
              font-inter
            </ClassName>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <div className='border-b pb-2'>
          <H2>Brand Colors</H2>
        </div>

        <div className='grid gap-8 grid-cols-2 md:grid-cols-4'>
          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-primary shadow-sm border'></div>
            <P className='font-bold'>Primary</P>
            <Muted>#FF14B2</Muted>
            <ClassName>bg-primary</ClassName>
          </div>

          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-background shadow-sm border border-border'></div>
            <P className='font-bold'>Background</P>
            <Muted>#FFFFFF / #161616</Muted>
            <ClassName>bg-background</ClassName>
          </div>

          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-muted shadow-sm border'></div>
            <P className='font-bold'>Muted</P>
            <Muted>#C6C6C6 / #3D3D3D</Muted>
            <ClassName>bg-muted</ClassName>
          </div>

          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-accent shadow-sm border'></div>
            <P className='font-bold'>Accent</P>
            <Muted>#FF8CB0 / #FF14B266</Muted>
            <ClassName>bg-accent</ClassName>
          </div>

          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-[#030223] shadow-sm border border-border text-white flex items-center justify-center'>
              #030223
            </div>
            <P className='font-bold'>Dark Blue</P>
            <Muted>Secondary (Light)</Muted>
            <ClassName>bg-[#030223]</ClassName>
          </div>

          <div className='space-y-2'>
            <div className='h-24 rounded-lg bg-[#3D3D3D] shadow-sm border border-border text-white flex items-center justify-center'>
              #3D3D3D
            </div>
            <P className='font-bold'>Dark Gray</P>
            <Muted>Card (Dark)</Muted>
            <ClassName>bg-[#3D3D3D]</ClassName>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <div className='border-b pb-2'>
          <H2>Brand Fonts</H2>
        </div>

        <div className='grid gap-8'>
          <div>
            <Coral className='text-6xl text-primary'>Coral Colour Font</Coral>
            <P>Used for display and artistic touches.</P>
            <ClassName>font-coral</ClassName>
            <div className='mt-4 p-4 border rounded bg-secondary/20'>
              <Coral className='text-4xl text-foreground'>
                The Quick Brown Fox Jumps Over The Lazy Dog
              </Coral>
            </div>
          </div>

          <div>
            <Fort className='text-6xl text-primary'>Fort Avenue Font</Fort>
            <P>Used for strong headlines and branding.</P>
            <ClassName>font-fort</ClassName>
            <div className='mt-4 p-4 border rounded bg-secondary/20'>
              <Fort className='text-4xl text-foreground'>
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
              </Fort>
            </div>
          </div>

          <div>
            <Obvia className='text-6xl text-primary'>Obvia Font</Obvia>
            <P>Used for display and impactful text (Black weight).</P>
            <ClassName>font-obvia</ClassName>
            <div className='mt-4 p-4 border rounded bg-secondary/20'>
              <Obvia className='text-4xl text-foreground'>
                The Quick Brown Fox Jumps Over The Lazy Dog
              </Obvia>
            </div>
          </div>

          <div>
            <Sailec className='text-6xl text-primary'>Sailec Font</Sailec>
            <P>Used for clean body text and UI elements (Medium weight).</P>
            <ClassName>font-sailec</ClassName>
            <div className='mt-4 p-4 border rounded bg-secondary/20'>
              <Sailec className='text-4xl text-foreground'>
                The Quick Brown Fox Jumps Over The Lazy Dog
              </Sailec>
            </div>
          </div>

          <div>
            <Termina className='text-6xl text-primary'>Termina Font</Termina>
            <P>Used for distinct headers and modern feel (Bold weight).</P>
            <ClassName>font-termina</ClassName>
            <div className='mt-4 p-4 border rounded bg-secondary/20'>
              <Termina className='text-4xl text-foreground'>
                The Quick Brown Fox Jumps Over The Lazy Dog
              </Termina>
            </div>
          </div>
        </div>
      </section>

      <div className='pt-10'>
        <Button asChild>
          <a href='/'>Go Back Home</a>
        </Button>
      </div>
    </div>
  )
}
