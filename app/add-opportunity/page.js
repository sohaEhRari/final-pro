import OpportunityForm from "@/components/opportunityForm";

export default function AddOpportunitiesPage() {
  return (
    <div className="
      min-h-screen
      py-8
      sm:py-10
      px-4
      bg-gradient-to-r
      from-white
      to-blue-400
      dark:from-slate-950
      dark:to-slate-800
      flex
      items-center
      justify-center
      transition-colors
    ">

      <div className="
        w-full
        max-w-4xl
        bg-white
        dark:bg-slate-900
        shadow-xl
        rounded-2xl
        p-5
        sm:p-8
        border
        border-gray-200
        dark:border-slate-700
      ">

        <div className="mb-8">

          <h1 className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-800
            dark:text-white
          ">
            Add New Opportunity
          </h1>


          <p className="
            text-sm
            sm:text-base
            text-gray-500
            dark:text-gray-300
            mt-2
          ">
            Fill in the information below to publish a new opportunity.
          </p>


          <div className="mt-6">
            <OpportunityForm />
          </div>

        </div>

      </div>

    </div>
  );
}