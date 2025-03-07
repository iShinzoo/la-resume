import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSkill, removeSkill } from '@/store/slices';

export default function SkillsSection() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.skills);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      dispatch(addSkill(newSkill));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    dispatch(removeSkill(skill));
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Skills</h2>
      <div>
        <label className="block text-sm font-medium">Skills</label>
        <div className="mt-1 flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            className="w-full rounded border p-2"
            onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
          />
          <button onClick={handleAddSkill} className="rounded bg-blue-500 px-3 py-2 text-white">
            <Plus size={16} />
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="flex items-center gap-1 rounded bg-gray-200 px-3 py-1">
              {skill}
              <button onClick={() => handleRemoveSkill(skill)} className="text-red-500">
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
