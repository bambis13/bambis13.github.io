export default function ({ env, redirect }) {
  if (env.is_maintenance) {
    return redirect('/maintenance')
  }
}
