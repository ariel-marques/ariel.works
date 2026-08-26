-- Run this script in the Supabase SQL Editor. It does not delete existing data.
create table if not exists public.hueo_beta_signups (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  email text not null,
  iphone_model text not null,
  user_profile text not null,
  edit_frequency text not null,
  consent boolean not null,
  status text not null default 'waitlist',
  source text not null,
  created_at timestamptz not null default now(),
  constraint hueo_beta_signups_consent_required check (consent = true)
);

alter table public.hueo_beta_signups alter column status set default 'waitlist';
alter table public.hueo_beta_signups alter column created_at set default now();

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'hueo_beta_signups_email_key'
      and conrelid = 'public.hueo_beta_signups'::regclass
  ) then
    alter table public.hueo_beta_signups
      add constraint hueo_beta_signups_email_key unique (email);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'hueo_beta_signups_consent_required'
      and conrelid = 'public.hueo_beta_signups'::regclass
  ) then
    alter table public.hueo_beta_signups
      add constraint hueo_beta_signups_consent_required check (consent = true);
  end if;
end $$;

alter table public.hueo_beta_signups enable row level security;

-- Without read/change policies, RLS also prevents anonymous SELECT, UPDATE, and DELETE.
revoke all on table public.hueo_beta_signups from anon;
grant insert (first_name, email, iphone_model, user_profile, edit_frequency, consent, status, source)
  on table public.hueo_beta_signups to anon;

drop policy if exists "Anonymous users can join the HUEO beta" on public.hueo_beta_signups;
create policy "Anonymous users can join the HUEO beta"
  on public.hueo_beta_signups
  for insert
  to anon
  with check (consent = true and status = 'waitlist');
