'use client';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

	
export default async function Page() {
	return (
	<>
    <div className='flex justify-center items-center h-screen'>
      <div className='h-fit min-w-[270px]'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
          providers={[]}
        />
      </div>
    </div>
	</>
	);
  }
